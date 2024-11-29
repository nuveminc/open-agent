export type Subscriber<T> = (state: T) => void;

export type Unsubscribe = () => void;

export interface Subscribable<T> {
  subscribe(subscriber: Subscriber<T>): Unsubscribe;
  unsubscribe(subscriber: Subscriber<T>): void;
  notify(state: T): void;
}

export class SubscriptionManager<T> implements Subscribable<T> {
  private subscribers: Set<Subscriber<T>> = new Set();

  subscribe(subscriber: Subscriber<T>): Unsubscribe {
    this.subscribers.add(subscriber);

    return () => {
      this.unsubscribe(subscriber);
    };
  }

  unsubscribe(subscriber: Subscriber<T>): void {
    this.subscribers.delete(subscriber);
  }

  notify(state: T): void {
    this.subscribers.forEach((subscriber) => {
      try {
        subscriber(state);
      } catch (error) {
        console.error('Error in subscriber:', error);
      }
    });
  }

  get subscriberCount(): number {
    return this.subscribers.size;
  }

  clearSubscribers(): void {
    this.subscribers.clear();
  }
}

// Example usage with specific state types
export interface ChatState {
  messages: string[];
  isTyping: boolean;
}

export type ChatSubscriber = Subscriber<ChatState>;
export type ChatSubscriptionManager = SubscriptionManager<ChatState>;
