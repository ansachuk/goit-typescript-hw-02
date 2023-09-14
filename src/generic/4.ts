/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Page {
	title: string;
}

class Component<T> {
	constructor(public props: T) {}
}

class Page extends Component<Page> {
	pageInfo(): void {
		console.log(this.props.title);
	}
}

export {};
