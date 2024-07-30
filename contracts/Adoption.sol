// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Adoption{
    address[16] public adopters;

      // Adopting a pet
     function adopt(uint petId) public returns(uint){
        require(petId >=0 && petId<=15);
     

     adopters[petId] = msg.sender;

      return petId;
     }

     // function to return the entire array.
       // Retrieving the adopters
     function getAdopters() public view returns(address[16] memory){
            return adopters;
     }
}
  
// solidity is compiled language means first compile the code and then execute by the EVM machine.
