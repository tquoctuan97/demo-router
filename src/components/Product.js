import React, { Component } from 'react';

class Product extends Component {
  render() {

    var {match} = this.props;
    var slug = match.params.slug;

    return (
      <h1>
          Đây là chi tiết sản phẩm {slug}
      </h1>
    );
  }
}

export default Product;
