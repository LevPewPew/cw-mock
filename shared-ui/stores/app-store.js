import { types } from "mobx-state-tree";

const appStore = types
  .model("AppStore", {
    isCookingComplete: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggleIsCookingComplete() {
      self.isCookingComplete = !self.isCookingComplete;
    },
  }));

export default appStore;
