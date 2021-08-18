import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 Coollaughing 组件库</h1>

        <code>
          {/* npm install vikingship --save */}
          npm install
        </code>
      </>
    )
  }, { info: { disable: true } })