import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filter/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterText) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText.toLowerCase()),
    );
  },
);
