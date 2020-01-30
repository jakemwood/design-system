import { fireEvent, render } from '@testing-library/react'

import React from 'react'

import Typeahead from '../index.js'

describe('Typeahead', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Typeahead data-testid="undertest">
        <Typeahead.Suggestion>first</Typeahead.Suggestion>
        <Typeahead.Suggestion>second</Typeahead.Suggestion>
        <Typeahead.Suggestion>third</Typeahead.Suggestion>
      </Typeahead>
    )
    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()
    render(<Typeahead ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  it('calls onFocus prop when input is focused', () => {
    const handleFocus = jest.fn()
    const { container } = render(<Typeahead onFocus={handleFocus} />)

    const input = container.querySelector('input')
    fireEvent.focus(input)

    expect(handleFocus).toHaveBeenCalled()
  })

  describe('suggestion menu', () => {
    const handleChange = jest.fn()

    let container, input, rerender

    beforeEach(() => {
      const result = render(
        <Typeahead onChange={handleChange}>
          <Typeahead.Suggestion>first</Typeahead.Suggestion>
          <Typeahead.Suggestion>second</Typeahead.Suggestion>
          <Typeahead.Suggestion>third</Typeahead.Suggestion>
        </Typeahead>
      )
      input = result.container.querySelector('input')

      container = result.container
      rerender = result.rerender
    })

    afterEach(() => {
      handleChange.mockClear()
    })

    it('is NOT visible on initial render', () => {
      const menu = container.querySelector('[role="menu"]')
      expect(menu).not.toBeInTheDocument()
    })

    it('is visible on input focus', () => {
      fireEvent.focus(input)

      const menu = document.querySelector('[role="menu"]')
      expect(menu).toBeInTheDocument()
    })

    it('shows all suggestions when no search input', () => {
      rerender(
        <Typeahead onChange={handleChange}>
          <Typeahead.Suggestion>first</Typeahead.Suggestion>
          <Typeahead.Suggestion>second</Typeahead.Suggestion>
          <Typeahead.Suggestion>third</Typeahead.Suggestion>
        </Typeahead>
      )
      fireEvent.focus(input)

      const menu = document.querySelector('[role="menu"]')

      expect(menu).toHaveTextContent('first')
      expect(menu).toHaveTextContent('second')
      expect(menu).toHaveTextContent('third')
    })

    it('filters suggestions when input value is updated', () => {
      rerender(
        <Typeahead onChange={handleChange}>
          <Typeahead.Suggestion>first</Typeahead.Suggestion>
          <Typeahead.Suggestion>second</Typeahead.Suggestion>
          <Typeahead.Suggestion>third</Typeahead.Suggestion>
        </Typeahead>
      )

      fireEvent.focus(input)
      fireEvent.change(input, { target: { value: 'second' } })

      const menu = document.querySelector('[role="menu"]')

      expect(menu).toHaveTextContent('second')

      expect(menu).not.toHaveTextContent('first')
      expect(menu).not.toHaveTextContent('third')
    })

    it('shows empty state if no suggestions are found', () => {
      rerender(
        <Typeahead onChange={handleChange}>
          <Typeahead.Suggestion>first</Typeahead.Suggestion>
          <Typeahead.Suggestion>second</Typeahead.Suggestion>
          <Typeahead.Suggestion>third</Typeahead.Suggestion>
        </Typeahead>
      )

      fireEvent.focus(input)
      fireEvent.change(input, { target: { value: 'no match' } })

      const menu = document.querySelector('[role="menu"]')
      expect(menu).toHaveTextContent('no results found')
    })
  })

  describe('when value is uncontrolled', () => {
    const handleChange = jest.fn()

    let input

    beforeEach(() => {
      const { container } = render(
        <Typeahead onChange={handleChange}>
          <Typeahead.Suggestion>first</Typeahead.Suggestion>
          <Typeahead.Suggestion>second</Typeahead.Suggestion>
        </Typeahead>
      )
      input = container.querySelector('input')
    })

    it('updates the inner input on change', () => {
      fireEvent.change(input, { target: { value: 'next value' } })
      expect(input).toHaveValue('next value')
    })

    it('calls the onChange prop on input change', () => {
      fireEvent.change(input, { target: { value: 'next value' } })
      expect(handleChange).toHaveBeenCalledWith(expect.anything(), 'next value')
    })
  })

  describe('when value is controlled', () => {
    const initialValue = 'the initial value'
    const handleChange = jest.fn()

    let input, rerender

    beforeEach(() => {
      const result = render(
        <Typeahead onChange={handleChange} value={initialValue}>
          <Typeahead.Suggestion>first</Typeahead.Suggestion>
          <Typeahead.Suggestion>second</Typeahead.Suggestion>
        </Typeahead>
      )
      input = result.container.querySelector('input')
      rerender = result.rerender
    })

    afterEach(() => {
      handleChange.mockClear()
    })

    it('does NOT update the inner input on change', () => {
      fireEvent.change(input, { target: { value: 'next value' } })
      expect(input).toHaveValue(initialValue)
    })

    it('calls the onChange prop on input change', () => {
      fireEvent.change(input, { target: { value: 'next value' } })
      expect(handleChange).toHaveBeenCalledWith(expect.anything(), 'next value')
    })

    it('updates the inner input value on rerender with new value', () => {
      rerender(
        <Typeahead onChange={handleChange} value="the new value">
          <Typeahead.Suggestion>first</Typeahead.Suggestion>
          <Typeahead.Suggestion>second</Typeahead.Suggestion>
        </Typeahead>
      )
      expect(input).toHaveValue('the new value')
    })
  })
})
