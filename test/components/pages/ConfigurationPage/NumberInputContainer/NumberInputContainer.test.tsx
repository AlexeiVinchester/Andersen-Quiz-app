import { describe, test, vi, beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NumberOfQuestionsContainer } from '../../../../../src/components/pages/ConfigurationPage/NumberInputContainer/NumberInputContainer';
import React from "react";
import { userEvent } from '@testing-library/user-event'

describe('testing of NumberOfQuestionsContainer', () => {
    describe('testing of base features', () => {
        const inputTestId = 'test-id-for-NumberOfQuestionsContainer';
        const placeholder = 'placeholder';
        const label = 'label'
        const min = 5;
        const max = 15;
        const onChangeNumber = vi.fn();
        let input: HTMLInputElement;

        beforeEach(() => {
            render(
                <NumberOfQuestionsContainer
                    data-testid={inputTestId}
                    placeholder={placeholder}
                    label={label}
                    min={min}
                    max={max}
                    onChangeNumber={onChangeNumber}
                />);
                input = screen.getByTestId(inputTestId)
        });

        test('check default value of NumberOfQuestionsContainer', () => {
            expect(input.valueAsNumber).toBe(5)
        });

        test('NumberOfQuestionsContainer uses html tag input', () => {
            expect(input.tagName).toBe('INPUT')
        });

        test('user change number of questions - called onChangeNumber', async () => {
            await userEvent.type(input, '5666')
            expect(onChangeNumber).toBeCalledTimes(4)                       
        });

    })
})