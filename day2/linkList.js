/**
* @desc LinkList { Class } 链表类
* @param constructor { func } 构造函数 
* @attr  head  { head }   链表头部  
* @attr  length { Number } 链表的长度
* @attr  Node { Object } 节点工厂
*/
class LinkList {

	constructor(head) {
	    this.head = head || null
	      this.length = 0
	      this.Node = function(el) {
	    	this.element = el
	    	this.next = null
	      }
	}

	/**
	* @desc append { func } 尾部添加节点
	* @param node { Object } 数据源
	* @return this { Object } 当前对象的指针
	*/
	append(node) {
        const node_ = new this.Node(node)
		let current

		if(this.head == null) {
			this.head = node_
		}else {
			current = this.head
			while(current.next != null) {
				current = current.next
			}
			current.next = node_
		}

	   this.length ++ 
	   return this
	}

	/**
	* @desc insert { func } 指定位置插入节点
	* @param position { Number } 指定的位置
	* @param node { Object } 数据源
	* @return this { Object } 当前对象的指针
	*/
	insert(positon, node) {
		if(0 <= positon <= this.length) {
			const node_ = new this.Node(node)
			let index = 0,
				previous,
				current = this.head

			if(positon == 0) {
				node_.next = current
				this.head = node_
			}else {
				while(++index < positon){
					previous = current
					current = current.next
				}
				node_.next = current
				previous.next = node_
			}
		    this.length ++ 
		    return this
		}
		return this && console.log('超出链表范围')
	}

	/**
	* @desc removeAt { func } 指定位置移除节点
	* @param position { Number } 指定的位置
	* @return this { Object } 当前对象的指针
	*/
	removeAt(positon) {
		const { previous, current } = this.indexOf(positon)
		previous.next = current.next
		this.length --
		return this
	}

	/**
	* @desc findAt { func } 指定位置查找节点的元素
	* @param position { Number } 指定的位置
	* @return this.element { Object } 返回指定位置节点的对象
	*/
	findAt(positon) {
		const { previous, current } = this.indexOf(positon)
		return current.element
	}

	/**
	* @desc indexOf { func } 指定位置查找节点
	* @param position { Number } 指定的位置
	* @return { previous, current } { Object } 返回指定位置的节点和上一位置节点
	*/
	indexOf(positon) {
		if(0 <= positon <= this.length) {
			let index = 0,
				previous,
				current = this.head

			if(positon == 0) {
				this.head = current.next
			}else {
				while(++index < positon) {
					previous = current
					current = current.next
				}
			}
			return { previous, current }
		}
		return this && console.log('超出链表范围')
	}

	/**
	* @desc isEmpty { func } 判断节点是否为空
	* @return bool { Boolean } 返回布尔类型
	*/
	isEmpty() {
		if(this.length>0) {
			return false
		}else {
			return true
		}
	}

	/**
	* @desc size { func } 获取链表的长度大小
	* @return this.length { Number } 返回链表长度
	*/
	size() {
		return this.length
	}

	/**
	* @desc getHead { func } 获取链表的头部节点
	* @return this.head { Object } 返回头部节点对象
	*/
	getHead() {
		if(!this.head) {
			return this && console.log('当前链表为空')
		}
		return this.head.element
	}

	/**
	* @desc toString { func } 将链表的元素转为字符串
	* @return str{ String } 返回链表元素值字符串
	*/
	toString() {
		let current = this.head,
		    string = ''
		while(current){
			string+=current.element
			current = current.next
		}
		return string.slice(1)
	}

	/**
	* @desc print { func } 打印链表属性
	* @return this { Object } 返回当前对象引用指针
	*/
	print() {
		return this && console.log(this)
	}
}

// test: example 链式调用
const result = new LinkList().append(1111).append(2222).append(333).insert(2,'我是插入的第2个元素').removeAt(2).print().findAt(2).toString()
console.debug(result)



