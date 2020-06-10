// Import dependencies
import * as React from 'react';

// Import interfaces
import { BudgetItemObjInterface, BudgetListInterface } from './../interfaces';

// Import components
import BudgetItem from './budgetItem';

const BudgetList = (props: BudgetListInterface): JSX.Element => {
  return (
    <div className="budget-list">
      {props.budgetItems.map((item: BudgetItemObjInterface) => {
        return (
          <BudgetItem
            key={item.id}
            budgetCurrency={props.budgetCurrency}
            budgetItem={item}
            handleItemUpdate={props.handleItemUpdate}
            handleItemRemove={props.handleItemRemove}
          />
        );
      })}
    </div>
  );
};

export default BudgetList;
