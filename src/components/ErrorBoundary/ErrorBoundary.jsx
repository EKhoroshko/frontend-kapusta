import React, { Component } from 'react';
import css from './ErrorBoundary.module.css';

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
      if (this.props.lang === "ua") {
        return <p className={css.text}>Щось пішло не так... Перезавантажте сторінку і спробуйте ще раз</p>
      } else {
        return <p className={css.text}>Something went wrong... Please reload the page and try again</p>
      }
    }
    return this.props.children;
  }
}

export default ErrorBoundary;