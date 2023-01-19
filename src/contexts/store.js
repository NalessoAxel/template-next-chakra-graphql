import produce from 'immer';
import { create } from 'zustand';

const useStore = create((setStore) => ({
	mobilescreen: false, // ? mobile fullscreen menu

	scroll: null,

	setStore: (fn) => setStore(produce(fn)),
}));

export default useStore;
