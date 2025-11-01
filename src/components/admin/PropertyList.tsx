import { useState } from 'react';
import { MoreVertical, Search, Pencil, Trash2, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Property {
  id: string;
  title: string;
  location: string;
  images: string[];
  price: string;
  status: string;
  beds: number;
  baths: number;
  sqft: number;
  featured: boolean;
  created_at: string;
}

interface PropertyListProps {
  properties: Property[];
  loading: boolean;
  onEdit: (property: Property) => void;
  onRefresh: () => void;
}

const PropertyList = ({ properties, loading, onEdit, onRefresh }: PropertyListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || property.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = async (propertyId: string) => {
    if (!confirm('Are you sure you want to delete this property?')) return;

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', propertyId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Property deleted successfully",
      });
      onRefresh();
    } catch (error) {
      console.error('Error deleting property:', error);
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      });
    }
  };

  const handleStatusChange = async (propertyId: string, newStatus: string) => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { error } = await supabase
        .from('properties')
        .update({ status: newStatus })
        .eq('id', propertyId);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Property ${newStatus}`,
      });
      onRefresh();
    } catch (error) {
      console.error('Error updating property status:', error);
      toast({
        title: "Error",
        description: "Failed to update property status",
        variant: "destructive",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'published':
        return 'default';
      case 'draft':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const exportToGoogleSheets = () => {
    const headers = ['Title', 'Location', 'Price', 'Beds', 'Baths', 'Sqft', 'Status', 'Featured'];
    const rows = filteredProperties.map(property => [
      property.title,
      property.location,
      property.price,
      property.beds,
      property.baths,
      property.sqft,
      property.status,
      property.featured ? 'Yes' : 'No'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `properties-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Exported",
      description: "Properties exported. Import this CSV file into Google Sheets.",
    });
  };

  if (loading) {
    return <div className="text-center py-8">Loading properties...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={exportToGoogleSheets} variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Beds/Baths</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProperties.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No properties found
                </TableCell>
              </TableRow>
            ) : (
              filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    {property.images?.[0] ? (
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
                        No image
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{property.title}</TableCell>
                  <TableCell>{property.location}</TableCell>
                  <TableCell>{property.price}</TableCell>
                  <TableCell>{property.beds} / {property.baths}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(property.status)}>
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {property.featured ? (
                      <Badge variant="default">Featured</Badge>
                    ) : (
                      <span className="text-muted-foreground text-sm">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEdit(property)}>
                          <Pencil className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(
                            property.id,
                            property.status === 'published' ? 'draft' : 'published'
                          )}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          {property.status === 'published' ? 'Unpublish' : 'Publish'}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(property.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PropertyList;