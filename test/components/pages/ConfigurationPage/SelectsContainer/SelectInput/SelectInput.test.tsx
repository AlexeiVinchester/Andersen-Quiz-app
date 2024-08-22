import { describe, test, vi, beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectInput } from '../../../../../../src/components/pages/ConfigurationPage/SelectsContainer/SelectInput/SelectInput';
import React from "react";
import { userEvent } from '@testing-library/user-event'
import { categories, types, difficulties, times } from '../../../../../../src/components/pages/ConfigurationPage/SelectsContainer/options/options';

describe('testing of SelectInputs of quiz configuration', () => {

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

        test('SelectInput uses html tag select', () => {
            expect(select.tagName).toBe('SELECT')
        });

        test(`SelectInput for categories has ${categories.length} options`, () => {
            expect(screen.getAllByRole('option').length).toBe(categories.length)
        });

        test('Check of default selected category', () => {
            expect(screen.getByRole('option', { name: 'Sports', selected: true }));
        });

        test('User change selected category', async () => {
            categories.forEach(async (category) => {
                await userEvent.selectOptions(select, category.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    });

    describe('testing of select for types', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();
        let select: HTMLSelectElement;
        beforeEach(() => {
            render(
                <SelectInput
                    data-testid={selectTestId}
                    options={types}
                    label="type"
                    onChangeSelectField={onChangeSelectField}
                />);
            select = screen.getByTestId(selectTestId)
        });

        test('SelectInput uses html tag select', () => {
            expect(select.tagName).toBe('SELECT')
        });

        test(`SelectInput for types has ${types.length} options`, () => {
            expect(screen.getAllByRole('option').length).toBe(types.length)
        });

        test('Check of default selected type', () => {
            expect(screen.getByRole('option', { name: 'Boolean', selected: true }));
        });

        test('User change selected type', async () => {
            types.forEach(async (type) => {
                await userEvent.selectOptions(select, type.label);
                expect(onChangeSelectField).toBeCalledTimes(1);
            });
        });
    });

    describe('testing of select for difficulties', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();
        let select: HTMLSelectElement;
        beforeEach(() => {
            render(
                <SelectInput
                    data-testid={selectTestId}
                    options={difficulties}
                    label="difficulty"
                    onChangeSelectField={onChangeSelectField}
                />);
            select = screen.getByTestId(selectTestId)
        });

        test('SelectInput uses html tag select', () => {
            expect(select.tagName).toBe('SELECT')
        });

        test(`SelectInput for difficulties has ${difficulties.length} options`, () => {
            expect(screen.getAllByRole('option').length).toBe(difficulties.length)
        });

        test('Check of default selected difficulty', () => {
            expect(screen.getByRole('option', { name: 'Easy', selected: true }));
        });

        test('User change selected difficulty', async () => {
            difficulties.forEach(async (difficulty) => {
                await userEvent.selectOptions(select, difficulty.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    });

    describe('testing of select for times', () => {
        const selectTestId = 'test-id-for-SelectInput';
        const onChangeSelectField = vi.fn();
        let select: HTMLSelectElement;
        beforeEach(() => {
            render(
                <SelectInput
                    data-testid={selectTestId}
                    options={times}
                    label="time"
                    onChangeSelectField={onChangeSelectField}
                />);
            select = screen.getByTestId(selectTestId)
        });

        test('SelectInput uses html tag select', () => {
            expect(select.tagName).toBe('SELECT')
        });

        test(`SelectInput for times has ${times.length} options`, () => {
            expect(screen.getAllByRole('option').length).toBe(times.length)
        });

        test('Check of default selected time', () => {
            expect(screen.getByRole('option', { name: '1m', selected: true }));
        });

        test('User change selected category', async () => {
            times.forEach(async (time) => {
                await userEvent.selectOptions(select, time.label);
                expect(onChangeSelectField).toBeCalled();
            });
        });
    });
});