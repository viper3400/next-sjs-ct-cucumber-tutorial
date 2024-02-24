import { test as componentTest } from '@playwright/experimental-ct-react'
import { useBase } from '@serenity-js/playwright-test'
import { Click, PageElement } from '@serenity-js/web'
import React from 'react'
import { Counter } from './Counter'
import { CounterSerenity } from './CounterSerenity'
import { Duration, Wait } from '@serenity-js/core'


// eslint-disable-next-line react-hooks/rules-of-hooks
const { it, describe } = useBase(componentTest)

describe('Counter', () => {

    it('ensures initial state', async ({ mount, actor }) => {

        const x = PageElement.from(await mount(
            <Counter />
        )).describedAs('counter component')

        await actor.attemptsTo(
            CounterSerenity.EnsureIncreaseButtonIsEnabled(),
            CounterSerenity.EnsureDecreaseButtonIsNotEnabled(),
            CounterSerenity.EnsureCount('0')
        )
    })

    it('ensures state after click to upper limit', async ({ mount, actor }) => {

        const x = PageElement.from(await mount(
            <Counter />
        )).describedAs('counter component')

        await actor.attemptsTo(
            CounterSerenity.EnsureIncreaseButtonIsEnabled(),
            CounterSerenity.EnsureDecreaseButtonIsNotEnabled(),
            CounterSerenity.EnsureCount('0'),
            Click.on(CounterSerenity.IncreaseButton),
            CounterSerenity.EnsureIncreaseButtonIsEnabled(),
            CounterSerenity.EnsureDecreaseButtonIsEnabled(),
            CounterSerenity.EnsureCount('1'),
            Click.on(CounterSerenity.IncreaseButton),
            Click.on(CounterSerenity.IncreaseButton),
            Click.on(CounterSerenity.IncreaseButton),
            Click.on(CounterSerenity.IncreaseButton),
            Click.on(CounterSerenity.IncreaseButton),
            CounterSerenity.EnsureIncreaseButtonIsEnabled(),
            CounterSerenity.EnsureDecreaseButtonIsEnabled(),
            CounterSerenity.EnsureCount('6'),
            Click.on(CounterSerenity.IncreaseButton),
            Click.on(CounterSerenity.IncreaseButton),
            Click.on(CounterSerenity.IncreaseButton),
            Click.on(CounterSerenity.IncreaseButton),
            CounterSerenity.EnsureCount('10'),
            CounterSerenity.EnsureIncreaseButtonIsNotEnabled(),
            CounterSerenity.EnsureDecreaseButtonIsEnabled(),
        )
    })
})