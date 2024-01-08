# 09-01 - Asynchronous Javascript Intro

- At it's core JavaScript is synchronous but there are asynchronous approaches

# Thread of Execution
- JavaScript is a **single-threaded** language
- Single sequential flow of control
- JavaScript is a **synchronous language** with asynchronous capabilities
- A thread has a **call stack** & **memory**

[Thread of Execution] : Runs one line of code at the time
  -> Operation 1
  -> Operation 2
  -> Operation 3
  -> Operation 4

  CALL STACK | MEMORY HEAP

  # How Async JavaScript Works
  - When an operation takes a while and holds of the line, it's called **blocking code / blocking operations**
  - **non blocking code** refers to code that does not holds execution

  - JavaScript Core:
    - Memory Heap | Call Stack
  - WEB API's
    - DOM API
    - setTimeOut() -> registers a call back to the Task Que
    - setInterval()
    - AJAX (XMLHttpRequest)
    - fetch() -> registers a promise to the MicroTask Que (PromiseJobs)

  - call backs get sent to the **Task Que**, this is first in and first out (similar to a revolving door at a mall)
  - promises get sent to the **MicroTask Que**, these have high priority on the call stack when fulfilled.






  
