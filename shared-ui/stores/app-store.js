import { types } from "mobx-state-tree";

const appStore = types
  .model("AppStore", {
    isCookingComplete: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setIsCookingComplete(value) {
      self.isCookingComplete = value;
    },
    toggleIsCookingComplete() {
      self.isCookingComplete = !self.isCookingComplete;
    },
  }));

export default appStore;
