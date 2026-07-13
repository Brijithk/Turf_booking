import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { forwardRef } from 'react';
import './Home.css';
import 'react-datepicker/dist/react-datepicker.css';
type Court = {
  id: number;
  location: string;
  availableFrom: number;
  availableTo: number;
};

const courtData: Court[] = [
  { id: 1, location: 'sengkang', availableFrom: 4, availableTo: 9 },
  { id: 2, location: 'Punggol', availableFrom: 9, availableTo: 14 },
  { id: 3, location: 'sengkang', availableFrom: 4, availableTo: 9 },
  { id: 4, location: 'Punggol', availableFrom: 14, availableTo: 19 },
];
function HomeFilter() {
    const [locationFilter, setLocationFilter] = useState('');
    const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);
    const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);
      const [timeFilter, setTimeFilter] = useState('');
        const [filteredCourts, setFilteredCourts] = useState<Court[]>(courtData);

    const CustomInputButton = forwardRef<HTMLButtonElement, any>(({ value, onClick }, ref) => (
  // <button className="home-common calendar-custom-input " onClick={onClick} ref={ref}>
       <button className="home-common home-size calendar-custom-input " onClick={onClick} ref={ref}>

    {value || 'Calendar'}
  </button>
));
  const handleClear = () => {
    setLocationFilter('');
    setTimeFilter('');
 setFilterStartDate(null);
setFilterEndDate(null);
    setFilteredCourts(courtData);
  };

  const handleApply = () => {
    let filtered = [...courtData];

    if (locationFilter) {
      filtered = filtered.filter(
        (court) => court.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    if (timeFilter) {
      const [from, to] = timeFilter.split('-').map(Number);
      filtered = filtered.filter(
        (court) =>
          court.availableFrom >= from && court.availableTo <= (to === 0 ? 24 : to)
      );
    }

    setFilteredCourts(filtered);
  };
    return <>
        <aside className="home-filter">
            <h3>Filter</h3>

            <select
                className="home-select home-common  input-padding-left"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
            >
                <option value="">All Location</option>
                <option value="sengkang">Seng Kang</option>
                <option value="Punggol">Punggol</option>
            </select>

            <DatePicker
                selected={filterStartDate}
                onChange={(dates) => {
                    const [start, end] = dates as [Date, Date];
                    setFilterStartDate(start);
                    setFilterEndDate(end);
                }}
                startDate={filterStartDate}
                endDate={filterEndDate}
                selectsRange
                placeholderText="Calendar"
                customInput={<CustomInputButton value={
                    filterStartDate && filterEndDate
                        ? `${filterStartDate.toLocaleDateString()} - ${filterEndDate.toLocaleDateString()}`
                        : 'Calendar'
                } />}
            // withPortal={window.innerWidth > 100}

            />




            <select
                className="home-common home-time input-padding-left "
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
            >
                <option value="">Time</option>
                <option value="04-09">04AM - 09AM</option>
                <option value="09-14">09AM - 02PM</option>
                <option value="14-19">02PM - 07PM</option>
                <option value="19-00">07PM - 12AM</option>
            </select>

            <div className="home-buttons">
                <button className="home-clear" onClick={handleClear}>Clear Filter</button>
                <button className="home-apply" onClick={handleApply}>Apply</button>
            </div>
        </aside>
    </>
}

export default HomeFilter