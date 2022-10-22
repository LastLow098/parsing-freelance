import { createStore } from 'vuex'
import {freelanceModule} from "@/store/freelanceModule";
import {crudModule} from "@/store/crudModule";

export default createStore({
  modules: {
      freelance: freelanceModule,
      crud: crudModule
  }
})
