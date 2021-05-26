console.log('hello world')

const body = document.querySelector('body')


function addJobsToBody(jobs) {
  if (jobs && jobs.length > 0) {
    const list = document.createElement('ul')
  
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i]
      const li = document.createElement('li')
      li.innerText = job.name
      list.appendChild(li)
    }
  
    body.appendChild(list)
  }
}


fetch('http://127.0.0.1:5000/jobs')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(body)
    if (data && data.jobs) {
      addJobsToBody(data.jobs)
    }
  })




