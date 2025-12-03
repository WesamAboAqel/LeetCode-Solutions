import { MaxHeap } from "./maxHeap.js";
import { MinHeap } from "./minHeap.js";

export class TwoHeaps {
    constructor() {
        this.small = new MaxHeap()
        this.large = new MinHeap()
    }

    insert = (number) => {
        // console.log(this.small.isEmpty())
        if(this.small.isEmpty() || number < this.small.top()){
            this.small.push(number)
        }else{
            this.large.push(number)
        }
        this.rebalance();
        console.log("Small: ", this.small.heap)
        console.log("Large: ", this.large.heap)
        return this.median();
    }

    rebalance = () => {
        // console.log(this.small.size() , (this.large.size() + 1))
        if(this.small.size() > (this.large.size() + 1)){
            console.log(this.small.heap)
            const number = this.small.pop()
            console.log(this.small.heap)
            this.large.push(number)
        }
        
        if(this.large.size() > this.small.size()){
            const number = this.large.pop()
            this.small.push(number)
        }
    }

    median = () => {
        if(this.small.size() !== this.large.size()){
            return this.small.top()
        }else{
            return (this.small.top() + this.large.top()) / 2
        }
    }
}