import { app } from "./app.js";
import {conf} from "./utlis/conf.js"


app.listen(conf.PORT , () => console.log(`App is listening on PORT ${conf.PORT}`))
