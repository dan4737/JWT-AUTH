import { UserDocument } from "../models/user.model";
import { SessionDocument } from "../models/session.model";

declare global {
  namespace Express {
    interface Request {
      userId: UserDocument["_id"];
      sessionId: SessionDocument["_id"];
    }
  }
}

// This file needs to be a module
export {};
