import React from 'react'
import { injectIntl } from 'react-intl'

const HelloWorld = ({
  intl
}) => {
  const message = intl.formatMessage({ id: 'store/sandbox.helloworld' });

  return <div>{message}</div>;
}


export default injectIntl(HelloWorld);
