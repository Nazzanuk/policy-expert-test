import {pipe} from 'ramda';

export const fixFloat = (num: number): number => Math.round((num) * 10000) / 10000;

export const toTwoDP = (num: number): number => Number(num.toFixed(2));

export const floatToTwoDP = pipe(fixFloat, toTwoDP);



