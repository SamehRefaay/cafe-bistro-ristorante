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
import { Home, HomeIcon, Settings } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import Link from 'next/link';
import Logo from '@/app/components/Logo';

const items = [
	{
		id: crypto.randomUUID(),
		title: 'Product',
		url: '',
		icon: Settings,
		subMenuItems: [
			{
				id: crypto.randomUUID(),
				title: 'All Products',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.ALLPRODUCTS}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Product',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.ADDPRODUCT}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Edit Product',
				icon: Home,
				url: `/${Routes.DASHBOARD}/${Routes.EDITPRODUCT}`,
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Users',
		icon: Home,
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
			<SidebarHeader className='w-full flex justify-center items-center'>
				<Logo background={false} />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup />
				<SidebarGroupLabel>Application</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						{items.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a href={item.url}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
				<SidebarGroup />
				<SidebarGroup>
					<SidebarGroupLabel>collapsible menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<Collapsible key={item.id} defaultOpen className='group/collapsible'>
									<SidebarMenuItem>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton>
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
