import React, { Component } from "react";
import ErrorMessage from '../lib/ui/ErrorMessage';

class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage text={this.state.errorMessage} />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
