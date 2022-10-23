import { createStore } from 'vuex'
import {freelanceModule} from "@/store/freelanceModule";
import {crudModule} from "@/store/crudModule";
import {snackModule} from "@/store/snackModule";

export default createStore({
  modules: {
      freelance: freelanceModule,
      crud: crudModule,
      snack: snackModule
  }
})
