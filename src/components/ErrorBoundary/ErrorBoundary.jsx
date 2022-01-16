import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.lang === "ru") {
        return <p>Что-то пошло не так... Перезагрузите страницу и попробуйте еще раз</p>
      } else {
        return <p>Something went wrong... Please reload the page and try again</p>
      }
    }
    return this.props.children;
  }
}

export default ErrorBoundary;