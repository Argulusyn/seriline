import { truncate } from 'lodash';
import {
  DESCRIPTION_WORDS_SEPARATOR,
  MAX_DESCRIPTION_LENGTH,
  REPLACE_TAGS_REGEXP
} from '../constants';

export const getShowPremieredLocaleDate = ({ premiered }) =>
  new Date(premiered).toLocaleDateString();

export const getShowDescription = ({ summary = 'Summary' }) =>
  summary.replace(REPLACE_TAGS_REGEXP, '');

export const getShortShowDescription = show => {
  const showDescription = getShowDescription(show);

  return truncate(showDescription, {
    length: MAX_DESCRIPTION_LENGTH,
    separator: DESCRIPTION_WORDS_SEPARATOR
  });
};
