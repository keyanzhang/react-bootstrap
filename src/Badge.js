import classNames from 'classnames';
import React from 'react';

import { prefix } from './utils/bootstrapUtils';
import ValidComponentChildren from './utils/ValidComponentChildren';

class Badge extends React.Component {
  static propTypes = {
    pullRight: React.PropTypes.bool
  };

  static defaultProps = {
    pullRight: false,
    bsClass: 'badge'
  };

  hasContent = () => {
    const { children } = this.props;

    return (
      ValidComponentChildren.count(children) > 0 ||
      React.Children.count(children) > 1 ||
      typeof children === 'string' ||
      typeof children === 'number'
    );
  };

  render() {
    let classes = {
      'pull-right': this.props.pullRight,
      [prefix(this.props)]: this.hasContent()
    };
    return (
      <span
        {...this.props}
        className={classNames(this.props.className, classes)}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Badge;
