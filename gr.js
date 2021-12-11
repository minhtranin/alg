'use strict';

const express = require('express');
const TaskRunner = require('./taskRunner.js');

const app = express();
app.use(express.json());

app.post('/api/runTasks', async (req, res, next) => {
  try {
    let max = -1
    const resp = []
    const taskPromise = []
    const { taskIds } = req.body
  console.log(taskIds)
    for (const [index, v] of taskIds.entries()) {
      const value = Number(v.replace('id', ''))
      if (!TaskRunner.hasTask(v)) {
        console.log(value, 'no have')
        const e = new Error("this is is not registered")
        e.status = 400
        const eleResp = new Promise.reject(e)
        taskPromise.push(eleResp)
      } else {
        const eleResp = new Promise(async (resolve, reject) => {
          if (value > max) {
            max = value
            resolve(index)
          } else {
            resolve(-1)
          }
          await TaskRunner.runTask(v)
        })
        taskPromise.push(eleResp)
      }
    } 
    const r = await Promise.all(taskPromise)
    return res.status(200).send(r)
  } catch (error) {
    next(error);
  }
});

exports.default = app.listen(process.env.HTTP_PORT || 3000);
