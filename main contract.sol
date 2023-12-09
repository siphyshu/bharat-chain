/**
 *Submitted for verification at Sepolia.Arbiscan.io on 2023-12-09
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PurchaseTransactionContract {
    // Structure to represent a transaction
    struct Transaction {
        uint256 transactionId;
        address buyer;
        address seller;
        uint256 productId;
        uint256 quantity;
        uint256 time;
        uint256 amount;
        bool isCompleted;
    }

    // Event emitted when a new transaction is created
    event TransactionCreated(
        uint256 transactionId,
        address indexed buyer,
        address indexed seller,
        uint256 productId,
        uint256 quantity,
        uint256 time,
        uint256 amount
    );

    // Event emitted when a transaction is completed
    event TransactionCompleted(uint256 transactionId);

    mapping(uint256 => Transaction) public transactions;
    mapping(address => Buyer) public buyers;
    mapping(address => Seller) public sellers;
    uint256 public transactionCount;

    // Structure to represent a buyer
    struct Buyer {
        uint256 productId;
        uint256 quantity;
        uint256 time;
        uint256 amount;
    }

    // Structure to represent a seller
    struct Seller {
        uint256 productId;
        uint256 quantity;
        uint256 time;
        uint256 amount;
    }

    // Function to create a new transaction
    function createTransaction(
        address _seller,
        uint256 _productId,
        uint256 _quantity,
        uint256 _amount
    ) external {
        transactionCount++;
        transactions[transactionCount] = Transaction(
            transactionCount,
            msg.sender,
            _seller,
            _productId,
            _quantity,
            block.timestamp,
            _amount,
            false
        );

        // Update buyer and seller details
        buyers[msg.sender] = Buyer(_productId, _quantity, block.timestamp, _amount);
        sellers[_seller] = Seller(_productId, _quantity, block.timestamp, _amount);

        // Emit event
        emit TransactionCreated(
            transactionCount,
            msg.sender,
            _seller,
            _productId,
            _quantity,
            block.timestamp,
            _amount
        );
    }

    // Function to complete a transaction
    function completeTransaction(uint256 _transactionId) external {
        transactions[_transactionId].isCompleted = true;

        // Emit event
        emit TransactionCompleted(_transactionId);
    }

    // Function to get buyer details
    function getBuyerDetails(address _buyer) external view returns (Buyer memory) {
        return buyers[_buyer];
    }

    // Function to get seller details
    function getSellerDetails(address _seller) external view returns (Seller memory) {
        return sellers[_seller];
    }

    // Function to get transaction details
    function getTransactionDetails(uint256 _transactionId) external view returns (Transaction memory) {
        return transactions[_transactionId];
    }

    // Function to get the total number of transactions
    function getTotalTransactionCount() external view returns (uint256) {
        return transactionCount;
    }
}