import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Click, Navigate } from '@serenity-js/web';

import { CounterSerenity } from '../../src/components/CounterSerenity';

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given('{actor} has opened the coffee counter app', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/')
    )
)

Then('{actor} should see the initial coffee count displayed as "0"', async (actor: Actor) =>
    actor.attemptsTo(
        CounterSerenity.EnsureCount('0')
    )
)

Then('{pronoun} should see that the "Increase" button is enabled', async (actor: Actor) =>
    actor.attemptsTo(
        CounterSerenity.EnsureIncreaseButtonIsEnabled()
    ))

Then('{pronoun} should see that the "Decrease" button is disabled', async (actor: Actor) =>
    actor.attemptsTo(
        CounterSerenity.EnsureDecreaseButtonIsNotEnabled()
    ))

When('{actor} increases the count to {int}', async (actor: Actor, increment_count: number) => {
    const clickPromises: Promise<void>[] = [];
    for (let index = 0; index < increment_count; index++) {
        clickPromises.push(actor.attemptsTo(
            Click.on(CounterSerenity.IncreaseButton)
        ));
    }
    await Promise.all(clickPromises);
}
)

When('{pronoun} clicks the "Decrease" button {int} times', async (actor: Actor, increment_count: number) => {
    const clickPromises: Promise<void>[] = [];
    for (let index = 0; index < increment_count; index++) {
        clickPromises.push(actor.attemptsTo(
            Click.on(CounterSerenity.DecreaseButton)
        ));
    }
    await Promise.all(clickPromises);
}
)

Then('{pronoun} should see the count value displayed as {int}', async (actor: Actor, expected_count: number) =>
    actorInTheSpotlight().attemptsTo(
        CounterSerenity.EnsureCount(expected_count.toString())
    )
)

Then('{pronoun} should see that the button to increase should be enabled',
    async (actor: Actor,) =>
        actor.attemptsTo(
            CounterSerenity.EnsureIncreaseButtonIsEnabled()
        ))

Then('{pronoun} should see that the button to increase should be disabled',
    async (actor: Actor) => actor.attemptsTo(
        CounterSerenity.EnsureIncreaseButtonIsNotEnabled()
    ))

Then('{pronoun} should see that the button to decrease should be enabled',
    async (actor: Actor) => actor.attemptsTo(
        CounterSerenity.EnsureDecreaseButtonIsEnabled()
    ))

Then('{pronoun} should see that the button to decrease should be disabled',
    async (actor: Actor) => actor.attemptsTo(
        CounterSerenity.EnsureDecreaseButtonIsNotEnabled()
    ))