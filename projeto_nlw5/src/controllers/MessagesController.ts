import { Request, Response } from "express";
import { MessageService } from "../services/MessageService";


class MessagesController {
    async create(request: Request, response: Response){
        const { admin_id, text, user_id } = request.body;
        const messageService = new MessageService();

        const message = await messageService.create({
            admin_id,
            text,
            user_id
        })

        return response.json(message);
    }
}

export { MessagesController };