import React, { Component } from 'react';
import CategoryName from './CategoryName';

class CategoryList extends Component {
  state = {
    bool: false,
  };
  //작성하다가 취소 누르면 해당 함수 실행.
  handleCancel = () => {};
  render() {
    const { bool } = this.state;
    const { categoryName, categoryList, handleChange } = this.props;
    const list = categoryList.map(el => {
      return <CategoryName key={el.id} data={el} />;
    });
    return (
      <div>
        {bool ? (
          <div>
            <input
              name="categoryName"
              value={categoryName}
              onChange={e => {
                handleChange(e);
              }}
            />
          </div>
        ) : null}
        <div>{list}</div>
      </div>
    );
  }
}
//+버튼이 있어서 누르면 input 창 보여주기 -> true or false state가 필요.

export default CategoryList;
