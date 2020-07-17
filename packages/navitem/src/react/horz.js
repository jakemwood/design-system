import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  caret: () => css(stylesheet['.psds-navitem__horz-caret']),
  icon: props =>
    css(
      stylesheet['.psds-navitem__horz-icon'],
      !props.children && stylesheet['.psds-navitem__horz-icon--icon-only']
    ),
  label: () => css(stylesheet['.psds-navitem__horz-label']),
  layout: props =>
    css(
      stylesheet['.psds-navitem__horz-layout'],
      props.menu && stylesheet['.psds-navitem__horz-layout--menu']
    )
}

export function HorzCaret(props) {
  return props.menu ? (
    <span className={styles.caret()}>
      <CaretDownIcon size={CaretDownIcon.sizes.small} />
    </span>
  ) : null
}
HorzCaret.propTypes = {
  menu: PropTypes.element
}

export function HorzIcon(props) {
  return props.icon ? (
    <span className={styles.icon(props)}>{props.icon}</span>
  ) : null
}
HorzIcon.propTypes = {
  icon: PropTypes.element
}

export function HorzLabel(props) {
  return props.children ? (
    <span className={styles.label()}>{props.children}</span>
  ) : null
}
HorzLabel.propTypes = {
  children: PropTypes.node
}

export function HorzLayout(props) {
  return (
    <span className={styles.layout(props)}>
      <HorzIcon {...props} />
      <HorzLabel {...props} />
      <HorzCaret {...props} />
    </span>
  )
}
HorzLayout.propTypes = {
  children: PropTypes.node
}
