import { describe, test, vi, expect, Mock, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectInput } from '../../../../../../src/components/pages/ConfigurationPage/SelectsContainer/SelectInput/SelectInput';
import React from "react";
import { userEvent } from '@testing-library/user-event'
import { categories, difficulties, types, times } from '../../../../../../src/components/pages/ConfigurationPage/SelectsContainer/options/options';
import { Option } from "../../../../../../src/components/pages/ConfigurationPage/SelectsContainer/options/option.interface";

const customRender = (onChangeSelectField: Mock, data: Option[], label: string) => {
    const selectTestId = 'test-id-for-SelectInput';
    render(
        <SelectInput
            data-testid={selectTestId}
            options={data}
            label={label}
            onChangeSelectField={onChangeSelectField}
        />
    );
};

describe('testing of SelectInputs of quiz configuration', () => {

    describe('testing of select for categories', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();

        afterEach(() => {
            vi.resetAllMocks();
        });

        test('SelectInput uses html tag select', () => {
            customRender(onChangeSelectField, categories, 'category');
            expect(screen.getByTestId(selectTestId).tagName).toBe('SELECT')
        });

        test(`SelectInput for categories has ${categories.length} options`, () => {
            customRender(onChangeSelectField, categories, 'category');
            expect(screen.getAllByRole('option').length).toBe(categories.length)
        });

        test('Check of default selected category', () => {
            customRender(onChangeSelectField, categories, 'category');
            expect(screen.getByRole('option', { name: 'Sports', selected: true }));
        });

        test('User change selected category', async () => {
            categories.forEach(async (category) => {
                customRender(onChangeSelectField, categories, 'category');
                await userEvent.selectOptions(screen.getAllByTestId(selectTestId)[0], category.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    });

    describe('testing of select for difficulties', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();

        afterEach(() => {
            vi.resetAllMocks();
        });

        test('SelectInput uses html tag select', () => {
            customRender(onChangeSelectField, difficulties, 'difficulty');
            expect(screen.getByTestId(selectTestId).tagName).toBe('SELECT')
        });

        test(`SelectInput for difficulties has ${difficulties.length} options`, () => {
            customRender(onChangeSelectField, difficulties, 'difficulty');
            expect(screen.getAllByRole('option').length).toBe(difficulties.length)
        });

        test('Check of default selected difficulty', () => {
            customRender(onChangeSelectField, difficulties, 'difficulty');
            expect(screen.getByRole('option', { name: 'Easy', selected: true }));
        });

        test('User change selected difficulty', async () => {
            difficulties.forEach(async (difficulty) => {
                customRender(onChangeSelectField, difficulties, 'difficulty');
                await userEvent.selectOptions(screen.getAllByTestId(selectTestId)[0], difficulty.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    });

    describe('testing of select for types', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();

        afterEach(() => {
            vi.resetAllMocks();
        });

        test('SelectInput uses html tag select', () => {
            customRender(onChangeSelectField, types, 'type');
            expect(screen.getByTestId(selectTestId).tagName).toBe('SELECT')
        });

        test(`SelectInput for types has ${difficulties.length} options`, () => {
            customRender(onChangeSelectField, types, 'type');
            expect(screen.getAllByRole('option').length).toBe(types.length)
        });

        test('Check of default selected type', () => {
            customRender(onChangeSelectField, types, 'type');
            expect(screen.getByRole('option', { name: 'Boolean', selected: true }));
        });

        test('User change selected type', async () => {
            types.forEach(async (type) => {
                customRender(onChangeSelectField, types, 'type');
                await userEvent.selectOptions(screen.getAllByTestId(selectTestId)[0], type.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    });

    describe('testing of select for times', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();

        afterEach(() => {
            vi.resetAllMocks();
        });

        test('SelectInput uses html tag select', () => {
            customRender(onChangeSelectField, times, 'time');
            expect(screen.getByTestId(selectTestId).tagName).toBe('SELECT')
        });

        test(`SelectInput for times has ${times.length} options`, () => {
            customRender(onChangeSelectField, times, 'time');
            expect(screen.getAllByRole('option').length).toBe(times.length)
        });

        test('Check of default selected time', () => {
            customRender(onChangeSelectField, times, 'time');
            expect(screen.getByRole('option', { name: '1m', selected: true }));
        });

        test('User change selected time', async () => {
            times.forEach(async (time) => {
                customRender(onChangeSelectField, times, 'time');
                await userEvent.selectOptions(screen.getAllByTestId(selectTestId)[0], time.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    });
});