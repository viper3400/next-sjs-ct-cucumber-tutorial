import { Ensure, contain, equals, not } from "@serenity-js/assertions";
import { Task } from "@serenity-js/core";
import { By, PageElement, isEnabled, Text, CssClasses } from "@serenity-js/web";

export class CounterSerenity {
    static CounterLabel = PageElement
        .located(By.css('[data-testid="count"]'))
        .describedAs('label that shows the current count')

    static IncreaseButton = PageElement
        .located(By.css('[data-testid="button-increase"]'))
        .describedAs('button to increase the count')

    static DecreaseButton = PageElement
        .located(By.css('[data-testid="button-decrease"]'))
        .describedAs('button to decrease the count')

    static EnsureIncreaseButtonIsEnabled = () =>
        Task.where('#actor ensures that increase button is enabled',
            Ensure.that(
                CssClasses.of(this.IncreaseButton),
                not(contain('cursor-not-allowed')))
        )

    static EnsureIncreaseButtonIsNotEnabled = () =>
        Task.where('#actor ensures that increase button is not enabled',
            Ensure.that(
                CssClasses.of(this.IncreaseButton),
                contain('cursor-not-allowed'))
        )

    static EnsureDecreaseButtonIsEnabled = () =>
        Task.where('#actor ensures that decrease button is enabled',
            Ensure.that(
                CssClasses.of(this.DecreaseButton),
                not(contain('cursor-not-allowed')))
        )

    static EnsureDecreaseButtonIsNotEnabled = () =>
        Ensure.that(
            CssClasses.of(this.DecreaseButton),
            (contain('cursor-not-allowed'))
        )

    static EnsureCount = (count: string) =>
        Task.where(`#actor ensures count label displays a value of ${count}`,
            Ensure.that(Text.of(this.CounterLabel), equals(count)))
}