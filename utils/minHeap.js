export class MinHeap {
    constructor() {
        this.heap = []
    }

    push = (number) => {
        this.heap.push(number)
        let index = this.heap.length - 1
        while(index > 0){

            const parent = Math.floor((index - 1) / 2)

            if(this.heap[parent] > this.heap[index]){

                const temp = this.heap[parent];
                this.heap[parent] = this.heap[index];
                this.heap[index] = temp;

                index = parent;
            }else{
                break;
            }
        }
    }

    getParent = (index) => {
        return Math.floor((index - 1) / 2)
    }

    getLeft = (index) => {
        return (index * 2) + 1
    }

    getRight = (index) => {
        return ((index * 2) + 1) + 1
    }

    pop = () => {
        if(this.heap.length === 0) return undefined;

        const number = this.heap[0]
        this.heap[0] = this.heap.pop()

        let index = 0
        // Down Heapify 
        while (index < this.heap.length){
            // Check Left Children
            const leftChildIndex = this.getLeft(index)
            if(this.heap[leftChildIndex] < this.heap[index]){
                [this.heap[leftChildIndex], this.heap[index]] = [this.heap[index], this.heap[leftChildIndex]]
                index = leftChildIndex;
                continue
            }
            // Check Right Children
            const rightChildIndex = this.getRight(index)
            if(this.heap[rightChildIndex] < this.heap[index]){
                [this.heap[rightChildIndex], this.heap[index]] = [this.heap[index], this.heap[rightChildIndex]]
                index = rightChildIndex
                continue
            }
            break;
        }

        return number;
    }

    heapify = (arr) => {
        this.heap = arr.slice()
        
        // Last Parent, if we start from the first parent we have to redo some nodes. 
        const lastParent = Math.floor((this.heap.length - 2) / 2)

        for (let i = lastParent; i >= 0; i--) {
            
            this.HeapifyDown(i)
            console.log(this.heap)
        }
    }

    HeapifyDown = (index) => {
        while (true){
            let minimumIndex = index
            
            const leftChildIndex = this.getLeft(index)
            const rightChildIndex = this.getRight(index)

            if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minimumIndex]){
                minimumIndex = leftChildIndex
            }

            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minimumIndex]){
                minimumIndex = rightChildIndex
            }

            if(minimumIndex === index) break;

            [this.heap[index], this.heap[minimumIndex]] = [this.heap[minimumIndex], this.heap[index]]

            index = minimumIndex
        }
    }

    top = () => {
        return this.heap[0]
    }

    size = () => {
        return this.heap.length
    }

    isEmpty = () => {
        return this.heap.length === 0
    }
}