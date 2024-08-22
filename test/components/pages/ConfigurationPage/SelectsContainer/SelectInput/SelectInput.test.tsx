import { describe, test, vi, beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectInput } from '../../../../../../src/components/pages/ConfigurationPage/SelectsContainer/SelectInput/SelectInput';
import React from "react";
import { userEvent } from '@testing-library/user-event'
import { categories } from '../../../../../../src/components/pages/ConfigurationPage/SelectsContainer/options/options';

describe('testing of SelectInput', () => {
    describe('testing of select for categories', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();
        let select: HTMLSelectElement;
        beforeEach(() => {
            render(
                <SelectInput
                    data-testid={selectTestId}
                    options={categories}
                    label="category"
                    onChangeSelectField={onChangeSelectField}
                />);
            select = screen.getByTestId(selectTestId)
        });

        test('SelectInput uses html tag input', () => {
            expect(select.tagName).toBe('SELECT')
        });

        test(`SelectInput for category has ${categories.length} options`, () => {
            expect(screen.getAllByRole('option').length).toBe(categories.length)
        });

        test('Check of default select', () => {
            expect(screen.getByRole('option', { name: 'Sports', selected: true }));
        });

        test('User change selected category', async () => {
            categories.forEach(async (category) => {
                await userEvent.selectOptions(select, category.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    })
})