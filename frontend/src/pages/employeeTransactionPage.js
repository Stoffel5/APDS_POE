import { useEffect, useState } from "react";
import TransactionDetails from '../components/TransactionDetails';

const EmployeeTransactionPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(`/api/transaction`); // Fetch all transactions for the employee
                const data = await response.json();

                if (!response.ok) {
                    setError(data.error);
                } else {
                    setTransactions(data);
                }
            } catch (error) {
                setError("An error occurred while fetching transactions.");
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="employeeTransactionPage">
              
            <h3>All Client Transactions</h3>

            <div className="books">
                {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <TransactionDetails key={transaction._id} transaction={transaction} />
                    ))
                ) : (
                    <div>No transactions available</div>
                )}
            </div>
        </div>
    );
};

export default EmployeeTransactionPage;

