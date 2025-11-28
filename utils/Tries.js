class TrieNode {
    constructor(){
        this.children = {}
        this.isEnd = false 
    }
}

export class Trie {
    constructor() {
        this.root = new TrieNode()
    }


    insert(word){
        let node = this.root;

        for(let letter of word){
            if(!node.children[letter]){
                node.children[letter] = new TrieNode()
            }
            node = node.children[letter]
        }

        node.isEnd = true
    }

    check(word){
        let node = this.root

        for(let letter of word){
            if(!node.children[letter]){
                return false
            }
            node = node.children[letter]
        }

        return node.isEnd
    }

    startsWith(word){
        let node = this.root

        for(let letter of word){
            if(!node.children[letter]){
                return false
            } 

            node = node.children[letter]
        }

        return true
    }

    delete(word){
        
        function recursion(word,node){
            if(word.length == 0){
                node.isEnd = false

                return Object.keys(node.children).length === 0
                
            } 

            const nextNode = node.children[word[0]]
            
            const canDelete = recursion(word.slice(1),nextNode)

            if(canDelete){
                // console.log(Object.keys(node.children).length)
                delete node.children[word[0]]
                // console.log(Object.keys(node.children).length)
            }else{
                return false
            }

            return (Object.keys(node.children).length === 0) && !node.isEnd
        }

        
        if(this.check(word)){
            return recursion(word,this.root)
        }else{
            return false
        }
    }
}