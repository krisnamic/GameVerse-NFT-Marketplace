// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import 'contracts/gameVerseNFT.sol';

contract gameVerse {
    address public nftAddress;
    receive() external payable{}
    fallback() external payable{}

    struct history {
        address buyerAddress;
        string name;
        string price;
    }

    history[] public orderHistory;

    constructor(address _nftAddress) {
        nftAddress = _nftAddress;
    }

    function getHistory() public view returns(uint256) {
        return orderHistory.length;
    }

    function order(string memory _metaUrl, string memory _name, string memory _price) payable public {
        GameVerseNFT gameVerseNFT = GameVerseNFT(nftAddress);

        gameVerseNFT.mintNFT(msg.sender, _metaUrl);
        payable (address(this)).transfer(msg.value); 

        history memory tempStruct;
        tempStruct.buyerAddress = msg.sender;
        tempStruct.name = _name;
        tempStruct.price = _price;

        orderHistory.push(tempStruct);
    }
}