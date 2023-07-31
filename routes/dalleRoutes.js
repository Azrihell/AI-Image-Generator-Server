import express from "express"
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from "openai"

const fruit = "apples-juice"

dotenv.config()

const router = express.Router()