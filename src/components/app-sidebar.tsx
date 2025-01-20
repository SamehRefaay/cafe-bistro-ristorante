import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Routes } from '@/constants/enums';
import { Home, Menu, User } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import Link from 'next/link';
import Logo from '@/app/components/Logo';

const items = [
	//Dashboard
	{
		id: crypto.randomUUID(),
		title: 'Dashboard',
		url: '',
		icon: Home,
		subMenuItems: [
			{
				id: crypto.randomUUID(),
				title: 'Bistro Restaurant',
				icon: Home,
				url: `/${Routes.DASHBOARD}`,
			},
		],
	},
	// Menus
	{
		id: crypto.randomUUID(),
		title: 'Menus',
		url: '',
		icon: Menu,
		subMenuItems: [
			{
				id: crypto.randomUUID(),
				title: 'Menu Catalogue',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.CATALOGUE}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Menu List',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Menu Grid',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_GRID}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Product',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.ADD_PRODUCT}`,
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Users',
		icon: User,
		url: '',
		subMenuItems: [
			{
				id: crypto.randomUUID(),
				title: 'User Profile',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.USERPROFILE}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add User',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.ADDUSER}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'User List',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.USERLIST}`,
			},
		],
	},
];

export function AppSidebar() {
	return (
		<Sidebar collapsible='offcanvas'>
			<SidebarHeader className='w-full h-[220px] flex justify-center items-center bg-accent'>
				<Logo background={false} />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel></SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<Collapsible key={item.id} defaultOpen className='group/collapsible'>
									<SidebarMenuItem>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton>
												<item.icon />
												<Link href={item.url}>{item.title}</Link>
											</SidebarMenuButton>
										</CollapsibleTrigger>
										<CollapsibleContent>
											<SidebarMenuSub>
												{item.subMenuItems?.map((subItem) => (
													<SidebarMenuSubItem key={subItem.id}>
														<Link href={subItem.url}>{subItem.title}</Link>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</CollapsibleContent>
									</SidebarMenuItem>
								</Collapsible>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
