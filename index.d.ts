import RedisSMQ from "rsmq";

export = RSMQPromise;

declare class RSMQPromise {
    constructor(options: RedisSMQ.ConstructorOptions);

	quit(): Promise<void>;

	createQueue(opts: RedisSMQ.CreateQueueOptions): Promise<1>;
	listQueues(): Promise<string[]>;
	deleteQueue(opts: RedisSMQ.DeleteQueueOptions): Promise<1>;
	getQueueAttributes(opts: RedisSMQ.GetQueueAttributesOptions): Promise<RedisSMQ.QueueAttributes>;
	setQueueAttributes(opts: RedisSMQ.SetQueueAttributesOptions): Promise<RedisSMQ.QueueAttributes>;

	sendMessage(opts: RedisSMQ.SendMessageOptions): Promise<number>;
	receiveMessage(opts: RedisSMQ.ReceiveMessageOptions): Promise<RedisSMQ.QueueMessage|{}>;
	popMessage(opts: RedisSMQ.PopMessageOptions): Promise<RedisSMQ.QueueMessage|{}>;
	deleteMessage(opts: RedisSMQ.DeleteMessageOptions): Promise<0|1>;
	changeMessageVisibility(opts: RedisSMQ.ChangeMessageVisibilityOptions): Promise<0|1>;
}