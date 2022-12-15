#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config()
import {RemoteQuerying} from "../src/api/v1/RemoteQuerying/index.js"
RemoteQuerying()

