import { describe, test, vi, expect, afterEach, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import { NumberOfQuestionsContainer } from '../../../../../src/components/pages/ConfigurationPage/NumberInputContainer/NumberInputContainer';
import React from "react";
import { userEvent } from '@testing-library/user-event'

const customRender = (onChangeNumber: Mock) => {
    const inputTestId = 'test-id-for-NumberOfQuestionsContainer';
    const placeholder = 'placeholder';
    const label = 'label'
    const min = 5;
    const max = 15;

    render(
        <NumberOfQuestionsContainer
            data-testid={inputTestId}
            placeholder={placeholder}
            label={label}
            min={min}
            max={max}
            onChangeNumber={onChangeNumber}
        />
    );
};

describe('testing of NumberOfQuestionsContainer', () => {
    describe('testing of base features', () => {
        const inputTestId = 'test-id-for-NumberOfQuestionsContainer';
        const onChangeNumber = vi.fn();

        afterEach(() => {
            vi.resetAllMocks();
        });

        test('check default value of NumberOfQuestionsContainer', () => {
            customRender(onChangeNumber);
            const input: HTMLInputElement = screen.getByTestId(inputTestId);
            expect(input.value).toBe('5')
        });

        test('NumberOfQuestionsContainer uses html tag input', () => {
            customRender(onChangeNumber);
            expect(screen.getByTestId(inputTestId).tagName).toBe('INPUT')
        });

        test('User change number of questions - called onChangeNumber', async () => {
            customRender(onChangeNumber);
            await userEvent.type(screen.getByTestId(inputTestId), '5664')
            expect(onChangeNumber).toBeCalledTimes(4)
        });
    });
});