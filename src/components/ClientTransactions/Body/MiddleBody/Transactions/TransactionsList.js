const initialState = {
    transactionsList: []
};

const actions = {
    ADD_DEPOSIT_AMOUNT: "ADD_DEPOSIT_AMOUNT",
    DEDUCT_WITHDRAWAL_AMOUNT: "DEDUCT_WITHDRAWAL_AMOUNT",
    DEDUCT_TRANSFER_AMOUNT: "DEDUCT_TRANSFER_AMOUNT"
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_DEPOSIT_AMOUNT:
            return {
                transactionsList: [
                    ...state.transactionsList,

                ]
            }
    }
}
