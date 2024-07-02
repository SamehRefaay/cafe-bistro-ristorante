import AdminControl from '@/app/components/AdminControl';
import MenuCategories from '@/app/components/MenuCategories';
import PageHeader from '@/app/components/PageHeader';
import SpecialCategories from '@/app/components/SpecialCategories';
import { CategoryType } from '@/types/types';

const getCategories = async () => {
	const res = await fetch('http://localhost:3000/api/categories', {
		cache: 'no-store',
	});

	if (!res.ok) throw new Error('Failed to fetch all categories!');

	return res.json();
};

function reorderArrayByIndexes(originalArray: any[], indexesArray: number[]) {
	return indexesArray.map(index => originalArray[index]);
}

const Menu = async () => {
	const indexesArray = [1, 2, 0, 3];
	const categories: CategoryType[] = await getCategories();
	const launchAndDinnerCategories = categories.filter(
		cat =>
			cat.title.toLocaleLowerCase() === 'launch' ||
			cat.title.toLocaleLowerCase() === 'dinner'
	);
	const otherCategories = categories.filter(
		cat =>
			cat.title.toLocaleLowerCase() !== 'launch' &&
			cat.title.toLocaleLowerCase() !== 'dinner'
	);

	const reorderedArray = reorderArrayByIndexes(otherCategories, indexesArray);

	return (
		<div className="w-full -mt-[96px]">
			<PageHeader image="/bg-menu.jpg.webp" title="" />
			<AdminControl />
			{/* starters - main - drinks - desert */}
			<MenuCategories categories={reorderedArray} />
			{/*  launch - dinner */}
			<SpecialCategories categories={launchAndDinnerCategories} />
		</div>
	);
};

export default Menu;
