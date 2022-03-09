// SPDX-License-Identifier: MIT
 pragma solidity ^0.8.1;

 contract Todo{
     string task;

    // this function is going to store the task 
     function setTask(string memory _task) public{
         task = _task;
     } 

    //this function is going to return the task
     function getTask() public view returns(string memory){
         return task;
     }

 }